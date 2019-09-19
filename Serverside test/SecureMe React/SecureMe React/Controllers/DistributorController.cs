using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;
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
            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                if (PassInfo != null)
                {
                    //Insert values not defined by frontend
                    PassInfo.UserId = Convert.ToInt32(NameId);
                    PassInfo.GeneratedOn = DateTime.Now;

                    //Add PassInfo to database
                    _context.Add(PassInfo);
                    _context.SaveChanges();

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

        //API Accepts data from the user to add a password to the collection
        [Authorize]
        [HttpPost("[action]")]
        public IActionResult DeletePassword([FromBody]Password PassInfo)
        {
            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                if (PassInfo != null)
                {
                    //Insert values not defined by frontend
                    //PassInfo.Id = Convert.ToInt32(PassInfo.Id);
                    //var set = _context.Set<TEntity>();
                    
                    _context.Passwords.Remove(new Password() { Id = PassInfo.Id });
                    _context.SaveChanges();
                    



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
            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                if (PassInfo != null)
                {
                    //Edit userId in UserInfo to Id from Token
                    PassInfo.Id = Convert.ToInt32(PassInfo.Id);
                    PassInfo.UserId = Convert.ToInt32(NameId);
                    PassInfo.GeneratedOn = DateTime.Now;

                    //PassInfo gives us access to the body of the Post Request
                    _context.Passwords.Attach(PassInfo);

                    var userentry = _context.Entry(PassInfo);
                    _context.Entry(PassInfo).State = EntityState.Modified;
                    _context.SaveChanges();

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
            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {
                //Searches for UserInfo based on the UserId
                var UserInfo = _context.UserInfos
                    .Where(u => u.UserId == Convert.ToInt32(NameId))
                    .SingleOrDefault();

                var json = JsonConvert.SerializeObject(UserInfo, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            return BadRequest("Invalid Token");
        }


        //API Accepts data from the user to update the information about the user
        [Authorize]
        [HttpPost("[action]")]
        public IActionResult ProfileSave([FromBody]UserInfo UserInfo)
        {
            //Find UserId inside the users JWT
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null)
            {

                if(UserInfo != null)
                {
                    //Edit userId in UserInfo to Id from Token
                    UserInfo.Id = Convert.ToInt32(NameId);
                    UserInfo.UserId = Convert.ToInt32(NameId);

                    //UserInfo gives us access to the body of the Post Request
                    _context.UserInfos.Attach(UserInfo);

                    var userentry = _context.Entry(UserInfo);
                    //Disables modification of certain properties
                    userentry.Property("Id").IsModified = false;
                    userentry.Property("UserId").IsModified = false;
                    userentry.Property("IsAuthenticated").IsModified = false;
                    //userentry.Property("MasterPass").IsModified = false;
                    _context.Entry(UserInfo).State = EntityState.Modified;
                    _context.SaveChanges();


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