using SecureMeShared.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecureMeShared.Models
{
    public class DBInitCoreContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Password> Passwords { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source = (localdb)\MSSQLLocalDB; Initial Catalog = SMCore-DB; Integrated Security = True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Email = "Email@Example.com",
                    MasterPass = "VerySafe123"

                }, new User
                {
                    Id = 2,
                    Email = "Email2@Example.com",
                    MasterPass = "Unsafe"
                });
            modelBuilder.Entity<Password>().HasData(
                new Password
                {
                    Id = 1,
                    PasswordHash = "SafePasswordForFacebook",
                    UserId = 1,
                    SiteDescription = "Facebook",
                    SiteLocation = "https://www.facebook.com/",
                    GeneratedOn = DateTime.Today.Date

                }, new Password
                {
                    Id = 2,
                    PasswordHash = "SafePassForGmail",
                    UserId = 1,
                    SiteDescription = "gmail",
                    SiteLocation = "https://www.gmail.com/",
                    GeneratedOn = DateTime.Today.Date

                }, new Password
                {
                    Id = 3,
                    PasswordHash = "SafePassForBattleOn",
                    UserId = 1,
                    SiteDescription = "AdventureQuest",
                    SiteLocation = "https://www.battleon.com/",
                    GeneratedOn = DateTime.Today.Date

                },
                new Password
                {
                    Id = 4,
                    PasswordHash = "insecurepass",
                    UserId = 2,
                    SiteDescription = "Facebook",
                    SiteLocation = "https://www.facebook.com/",
                    GeneratedOn = DateTime.Today.Date

                }, new Password
                {
                    Id = 5,
                    PasswordHash = "123456",
                    UserId = 2,
                    SiteDescription = "Facebook",
                    SiteLocation = "https://www.facebook.com/",
                    GeneratedOn = DateTime.Today.Date
                }, new Password
                {
                    Id = 6,
                    PasswordHash = "mydogsname",
                    UserId = 2,
                    SiteDescription = "Facebook",
                    SiteLocation = "https://www.facebook.com/",
                    GeneratedOn = DateTime.Today.Date
                });
            modelBuilder.Entity<UserInfo>().HasData(
                new UserInfo
                {
                    Id = 1,
                    FirstName = "Jacopy",
                    LastName = "Wick",
                    Country = "Dennemarken",
                    City = "LallaLand",
                    Street = "Lollypoppy 123",
                    Zip = "",
                    Phone = 88888888,
                    IsAuthenticated = false,
                    UserId = 1
                }); ;
        }
    }
}