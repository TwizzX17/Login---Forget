using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using DBInit.Models;
using System.Diagnostics;

namespace DBInit
{
    class Program
    {
        static void Main(string[] args)
        {

            using (var context = new Context())
            {


                // checking if data exists
                // REMEMBER TO DOWNLOAD ENTITY FRAMEWORK VIA NUGET

                //var passwords = context.Passwords
                //    .Where(p => p.UserId == 1) //ideally, 1 here would be [userid] fed from the front-end.
                //    .ToList();

                //foreach (var password in passwords)
                //{
                //    Console.WriteLine($"{password.PasswordHash}");
                //}

                Console.ReadLine();
            }
        }
    }
}