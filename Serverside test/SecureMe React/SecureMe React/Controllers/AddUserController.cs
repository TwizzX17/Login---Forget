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
    public class AddUserController : ControllerBase
    {
        private DBInitCoreContext _context = null;

        public AddUserController()
        {
            _context = new DBInitCoreContext();
        }


        //API Accepts data from the user to add a password to the collection
        [AllowAnonymous]
        [HttpPost("[action]")]
        public IActionResult AddUser([FromBody]User UserInfo)
        {
            try
            {
                //Add PassInfo to database
                _context.Add(UserInfo);
                _context.SaveChanges();

                //We need confirmation from the database, that the information has been saved successfully
                string success = "User was created successfully created";
                var json = JsonConvert.SerializeObject(success, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                //We need confirmation from the database, that the information has been saved successfully
                string Failure = "User already exists";
                var json = JsonConvert.SerializeObject(Failure, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

    }
}