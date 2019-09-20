using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Web;

namespace SecureMe_React.Methods
{
    public class SecretSegmenter
    {
        public static string Segmenter()
        {
            Random random = new Random();
            string PasswordHash = "";

            for (int i = 0; i < 5; i++)
            {

                int picker = random.Next(1, 26);
                if (picker == 1)
                {
                    PasswordHash = RandomInt(10) + "\\" + RandomString(2, true) + RandomString(2, false) + "\\" + RandomInt(5) + RandomString(2, true);
                }
                else if (picker == 2)
                {
                    PasswordHash = RandomString(2, true) + RandomInt(10) + "<p></p>" + RandomInt(5) + RandomString(2, true) + RandomString(2, false);
                }
                else if (picker == 3)
                {
                    PasswordHash = RandomString(2, false) + RandomString(2, true) + RandomInt(10) + RandomInt(5) + RandomString(2, true) + "?|";
                }
                else if (picker == 4)
                {
                    PasswordHash = RandomString(2, true) + "<div>" + RandomString(2, false) + RandomString(2, true) + RandomInt(10) + RandomInt(5);
                }
                else if (picker == 5)
                {
                    PasswordHash = RandomInt(5) + RandomString(2, true) + RandomString(2, false) + "*&" + RandomString(2, true) + RandomInt(10);
                }


                else if (picker == 6)
                {
                    PasswordHash = RandomInt(10) + RandomString(2, true) + "" + RandomInt(5) + RandomString(2, false) + RandomString(2, true);
                }
                else if (picker == 7)
                {
                    PasswordHash = RandomString(2, true) + RandomInt(10) + RandomString(2, true) + RandomInt(5) + RandomString(2, false);
                }
                else if (picker == 8)
                {
                    PasswordHash = RandomString(2, false) + "" + RandomString(2, true) + RandomInt(10) + RandomString(2, true) + RandomInt(5);
                }
                else if (picker == 9)
                {
                    PasswordHash = RandomInt(5) + "" + RandomString(2, false) + RandomString(2, true) + RandomInt(10) + RandomString(2, true);
                }
                else if (picker == 10)
                {
                    PasswordHash = RandomString(2, true) + RandomInt(5) + RandomString(2, false) + "" + RandomString(2, true) + RandomInt(10);
                }


                else if (picker == 11)
                {
                    PasswordHash = RandomString(2, true) + RandomInt(5) + RandomString(2, false) + "" + RandomInt(10) + RandomString(2, false);
                }
                else if (picker == 12)
                {
                    PasswordHash = RandomString(2, false) + RandomString(2, true) + RandomInt(5) + RandomString(2, false) + "" + RandomInt(10);
                }
                else if (picker == 13)
                {
                    PasswordHash = RandomInt(10) + "" + RandomString(2, false) + "" + RandomString(2, true) + RandomInt(5) + RandomString(2, false);
                }
                else if (picker == 14)
                {
                    PasswordHash = RandomString(2, false) + RandomInt(10) + RandomString(2, false) + RandomString(2, true) + RandomInt(5);
                }
                else if (picker == 15)
                {
                    PasswordHash = "" + RandomInt(5) + RandomString(2, false) + RandomInt(10) + RandomString(2, false) + RandomString(2, true);
                }


                else if (picker == 16)
                {
                    PasswordHash = RandomInt(5) + RandomString(2, false) + "" + RandomInt(10) + RandomString(2, true) + RandomString(2, true);
                }
                else if (picker == 17)
                {
                    PasswordHash = RandomString(2, true) + "" + RandomInt(5) + RandomString(2, false) + RandomInt(10) + RandomString(2, true);
                }
                else if (picker == 18)
                {
                    PasswordHash = RandomString(2, true) + RandomString(2, true) + RandomInt(5) + RandomString(2, false) + RandomInt(10);
                }
                else if (picker == 19)
                {
                    PasswordHash = RandomInt(10) + "" + RandomString(2, true) + RandomString(2, true) + "" + RandomInt(5) + RandomString(2, false);
                }
                else if (picker == 20)
                {
                    PasswordHash = RandomString(2, false) + RandomInt(10) + "" + RandomString(2, true) + RandomString(2, true) + RandomInt(5);
                }


                else if (picker == 21)
                {
                    PasswordHash = RandomInt(5) + RandomString(2, false) + RandomString(2, false) + RandomInt(10) + RandomString(2, true) + "</div";
                }
                else if (picker == 22)
                {
                    PasswordHash = RandomString(2, true) + RandomInt(5) + RandomString(2, false) + RandomString(2, false) + "src=\"" + RandomInt(10) + "\"";
                }
                else if (picker == 23)
                {
                    PasswordHash = RandomInt(10) + RandomString(2, true) + "~%" + RandomInt(5) + RandomString(2, false) + RandomString(2, false);
                }
                else if (picker == 24)
                {
                    PasswordHash = RandomString(2, false) + RandomInt(10) + "{}" + RandomString(2, true) + RandomInt(5) + RandomString(2, false);
                }
                else if (picker == 25)
                {
                    PasswordHash = RandomString(2, false) + RandomString(2, false) + RandomInt(10) + "" + RandomString(2, true) + RandomInt(5);
                }
            }

            return PasswordHash;
        }

        public static string RandomInt(int size)
        {
            Random random = new Random();
            int integer = 0;

            for (int i = 0; i < size; i++)
            {
                int number = random.Next(1, 1001);
                integer += number;
            }

            return integer.ToString();
        }
        // Generate a random string with a given size  
        public static string RandomString(int size, bool lowerCase)
        {
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch;
            for (int i = 0; i < size; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
                builder.Append(ch);
            }
            if (lowerCase)
                return builder.ToString().ToLower();
            return builder.ToString();
        }
    }
}