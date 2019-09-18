using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Security.Claims;
using SecureMeShared;
using SecureMeShared.Models;
using Microsoft.EntityFrameworkCore;

namespace SecureMe_React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DistributorController : ControllerBase
    {

        private DBInitCoreContext _context = null;

        public DistributorController()
        {
            _context = new DBInitCoreContext();
        }

        //API for password list to be displayed on dashboard
        //At this point its static data - waiting for connection to database
        [Authorize]
        [HttpGet("[action]")]
        public IActionResult Passwords()
        {
            ////This is gold, do not delete
            //int userid = 1;

            //var passwords = _context.Passwords
            //    .Include(p => p.User)
            //    .Where(p => p.UserId == userid)
            //    .ToList();


            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                //Searches for passwords based on the UserId
                var passwords = _context.Passwords
                    .Where(p => p.UserId == Convert.ToInt32(NameId))
                    .ToList();
                var json = JsonConvert.SerializeObject(passwords, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            return BadRequest("Invalid Token");

        }

        //API Accepts data from the user to add a password to the collection
        [Authorize]
        [HttpPost("[action]")]
        public IActionResult AddPassword([FromBody]Password PassInfo)
        {
            //Find Email inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {

                if (PassInfo != null)
                {
                    //UserInfo gives us access to the body of the Post Request
                    var test = PassInfo;


                    //We need confirmation from the database, that the information has been saved successfully
                    string success = "Your information was saved successfully";
                    var json = JsonConvert.SerializeObject(success, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                else
                {
                    string failure = "An internal error occured";
                    var json = JsonConvert.SerializeObject(failure, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
            }
            else
            {
                return BadRequest("Invalid Token");
            }
        }


        //API Accepts data from the user to edit a password in the collection
        [Authorize]
        [HttpPost("[action]")]
        public IActionResult EditPassword([FromBody]Password PassInfo)
        {
            //Find Email inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                if (PassInfo != null)
                {
                    //UserInfo gives us access to the body of the Post Request
                    var test = PassInfo;
                    
                    //We need confirmation from the database, that the information has been saved successfully
                    string success = "Your information was saved successfully";
                    var json = JsonConvert.SerializeObject(success, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                else
                {
                    string failure = "An internal error occured";
                    var json = JsonConvert.SerializeObject(failure, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
            }
            else
            {
                return BadRequest("Invalid Token");
            }
        }



        //API for profile to be displayed on Profile
        //At this point its static data - waiting for connection to database
        [Authorize]
        [HttpGet("[action]")]
        public IActionResult Profile()
        {
            //Find Email inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                UserModel User = new UserModel
                {
                    
                    EmailAddress = "Jacob@gmail.com",
                    FirstName = "Jacob",
                    LastName = "Wistrøm",
                    Country = "Denmark",
                    City = "Fredensborg",
                    Street = "StreetName213123",
                    Zip = "3480",
                    Phone = "88888888",
                };

                var json = JsonConvert.SerializeObject(User, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            return BadRequest("Invalid Token");
        }


        //API Accepts data from the user to update the information about the user
        [Authorize]
        [HttpPost("[action]")]
        public IActionResult ProfileSave([FromBody]UserModel UserInfo)
        {
            //Find Email inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {

                if(UserInfo != null)
                {
                    //UserInfo gives us access to the body of the Post Request
                    var test = UserInfo;


                    //We need confirmation from the database, that the information has been saved successfully
                    string success = "Your information was saved successfully";
                    var json = JsonConvert.SerializeObject(success, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                else
                {
                    string failure = "An internal error occured";
                    var json = JsonConvert.SerializeObject(failure, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
            }
            else
            {
                return BadRequest("Invalid Token");
            }
        }

    }
}