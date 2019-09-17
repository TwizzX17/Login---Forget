using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SecureMe_React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DistributorController : ControllerBase
    {
        //test
        [HttpGet("[action]")]
        public string Passwords()
        {
            return "testboy";
        }

    }
}