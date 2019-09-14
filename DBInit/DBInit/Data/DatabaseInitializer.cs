using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using DBInit.Models;

namespace DBInit
{
    internal class DatabaseInitializer 
        : DropCreateDatabaseAlways<Context>
    {
        protected override void Seed(Context context)
        {
            var User1 = new User()
            {
                Id = 1,
                Email = "Email@Example.com",
                MasterPass = "VerySafe123",
                IsAuthenticated = false
            };
            var User2 = new User()
            {
                Id = 2,
                Email = "Email2@Example.com",
                MasterPass = "Unsafe",
                IsAuthenticated = false
            };

            context.Users.Add(User1);
            context.Users.Add(User2);

            var user1Password1 = new Password()
            {
                Id = 1,
                PasswordHash = "SafePasswordForFacebook",
                UserId = 1,
                SiteDescription = "Facebook",
                SiteLocation = "https://www.Facebook.com",
                GeneratedOn = DateTime.Today.Date
            };

            var user1Password2 = new Password()
            {
                Id = 2,
                PasswordHash = "SafePassForGmail",
                UserId = 1,
                SiteDescription = "gmail",
                SiteLocation = "https://www.gmail.com",
                GeneratedOn = DateTime.Today.Date
            };

            var user1Password3 = new Password()
            {
                Id = 3,
                PasswordHash = "SafePassForBattleOn",
                UserId = 1,
                SiteDescription = "AdventureQuest",
                SiteLocation = "https://www.battleon.com",
                GeneratedOn = DateTime.Today.Date
            };

            context.Passwords.Add(user1Password1);
            context.Passwords.Add(user1Password2);
            context.Passwords.Add(user1Password3);

            var user2Password1 = new Password()
            {
                Id = 1,
                PasswordHash = "insecurepass",
                UserId = 2,
                SiteDescription = "Facebook",
                SiteLocation = "https://www.Facebook.com",
                GeneratedOn = DateTime.Today.Date
            };
            var user2Password2 = new Password()
            {
                Id = 1,
                PasswordHash = "123456",
                UserId = 2,
                SiteDescription = "Facebook",
                SiteLocation = "https://www.Facebook.com",
                GeneratedOn = DateTime.Today.Date
            };
            var user2Password3 = new Password()
            {
                Id = 1,
                PasswordHash = "mydogsname",
                UserId = 2,
                SiteDescription = "Facebook",
                SiteLocation = "https://www.Facebook.com",
                GeneratedOn = DateTime.Today.Date
            };

            context.Passwords.Add(user2Password1);
            context.Passwords.Add(user2Password2);
            context.Passwords.Add(user2Password3);

            context.SaveChanges();

        }

    }
    
}
