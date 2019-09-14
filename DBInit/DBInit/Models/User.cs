using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DBInit.Models
{
    public class User
    {
        public User()
        {
            Passwords = new List<Password>();
        }

        // NECESSARY CODE
        public int Id { get; set; }
        [Required, StringLength(50), EmailAddress]
        public string Email { get; set; }
        [Required, StringLength(32)]
        public string MasterPass { get; set; }
        // NECESSARY CODE END

        // USER INFO
        [StringLength(30)]
        public string FirstName { get; set; }
        [StringLength(40)]
        public string LastName { get; set; }
        [StringLength(50)]
        public string Country { get; set; }
        [StringLength(80)]
        public string City { get; set; }
        [StringLength(80)]
        public string Street { get; set; }
        [StringLength(10)]
        public string Zip { get; set; }
        public bool IsAuthenticated { get; set; }

        public int Phone { get; set; }
        // USER INFO END

        //NAVIGATION
        public virtual ICollection<Password> Passwords { get; set; }
        // NAVIGATION END

        // METHODS

        // END OF METHODS

        // TO BE DEPLOYED
        [NotMapped, StringLength(5)]
        public string CountryCode { get; set; }
        [NotMapped]
        public bool IsPremium { get; set; }
        // END OF TO BE DEPLOYED
    }
}
