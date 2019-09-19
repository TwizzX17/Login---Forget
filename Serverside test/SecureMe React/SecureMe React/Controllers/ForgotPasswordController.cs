using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecureMeShared.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace SecureMe_React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ForgotPasswordController : ControllerBase
    {
        private DBInitCoreContext _context = null;

        public ForgotPasswordController()
        {
            _context = new DBInitCoreContext();
        }


        //API Accepts data from the user to add a password to the collection
        [AllowAnonymous]
        [HttpPost("[action]")]

        public IActionResult ForgotPassword([FromBody]User user)
        {
            //Finds the user where email matches
            var ConfirmedUser = _context.Users
                .Where(u => u.Email == user.Email)
                .SingleOrDefault();

            //A Message will be displayed to the user regardless if the email is correct or not.
            string success = "An Email will be sent to you with further instructions.";
            var json = JsonConvert.SerializeObject(success, Formatting.Indented);
            IActionResult response = Ok(json);
            return response;

        }

    }
}