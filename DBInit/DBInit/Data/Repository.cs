using DBInit.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBInit.Data
{
    class Repository
    {

        // Private method that returns a database context.
        static Context GetContext()
        {
            var context = new Context();
            context.Database.Log = (message) => Debug.WriteLine(message);
            return context;
        }


        //returns a count of Passwords
        public static int GetPasswordCount()
        {
            using (Context context = GetContext())
            {
                return context.Passwords.Count();
            }
        }

        //public static IList<Password> GetPasswords()
        //{
        //    using (Context context = GetContext())
        //    {
        //        return context.Passwords
        //            .Include(User => User.)
        //            .ToList();
        //    }
        //}




    }
}
