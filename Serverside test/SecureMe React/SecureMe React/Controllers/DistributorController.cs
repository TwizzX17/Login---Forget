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

namespace SecureMe_React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DistributorController : ControllerBase
    {
        //test
        [Authorize]
        [HttpGet("[action]")]
        public IActionResult Passwords()
        {
            
            Password p1 = new Password
            {
                Id = "1",
                Passwords = "Abemand",
                SiteDescription = "My Facebook Account",
                SiteLocation = "https://Facebook.com",
                GeneratedOnDate = "01-02-2017",
            };
            Password p2 = new Password
            {
                Id = "3",
                Passwords = "BigBoy",
                SiteDescription = "My Google Account",
                SiteLocation = "https://Google.com",
                GeneratedOnDate = "11-09-2001",
            };

            List<Password> passlist = new List<Password>();
            passlist.Add(p1);
            passlist.Add(p2);

            var json = JsonConvert.SerializeObject(passlist, Formatting.Indented);

            IActionResult response = Ok(json);




            return response;
        }

    }
}