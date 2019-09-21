using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SecureMeShared.Models;
using SecureMeShared;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace SecureMe_React.Controllers
{
    public class Login
    {
        private DBInitCoreContext _context = null;

        public Login()
        {
            _context = new DBInitCoreContext();
        }

        public User UserLogin(string Mail, string Pass)
        {
            var UserInformation = _context.Users
                .Where(u => u.MasterPass == Pass && u.Email == Mail)
                .SingleOrDefault();
            return UserInformation;
        }
    }
}
