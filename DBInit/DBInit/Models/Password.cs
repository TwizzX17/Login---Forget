using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DBInit.Models
{
    public class Password
    {

        public int Id { get; set; }

        public string PasswordHash { get; set; }

        public int UserId { get; set; }

        [Required, StringLength(50)]
        public string SiteDescription { get; set; }

        [Required, StringLength(100), Url]
        public string SiteLocation { get; set; }

        public DateTime GeneratedOn { get; set; }

        public User User { get; set; }

        //public enum PasswordStrength
        //{
        //    weak = 1,
        //    medium = 2,
        //    strong = 3
        //}

    }
}
