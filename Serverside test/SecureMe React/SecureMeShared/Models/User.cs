using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SecureMeShared.Models
{
    [Table("User", Schema = "dbo")]
    public class User
    {
        public User()
        {
            Passwords = new List<Password>();
        }

        // NECESSARY CODE
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "")]
        public int Id { get; set; }
        [Required, StringLength(50), EmailAddress]

        public string Email { get; set; }
        [Required, StringLength(32)]
        [Display(Name = "Password")]
        public string MasterPass { get; set; }
        // NECESSARY CODE END

        // USER INFO
        [StringLength(30)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [StringLength(40)]
        [Display(Name = "Last Name")]
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

        [Display(Name = "Phone number")]
        public int Phone { get; set; }
        // USER INFO END

        //NAVIGATION
        public virtual ICollection<Password> Passwords { get; set; }
        // NAVIGATION END

        // METHODS

        // END OF METHODS

        // TO BE DEPLOYED
        [NotMapped, StringLength(5)]
        [Display(Name = "Country Code")]
        public string CountryCode { get; set; }

        [NotMapped]
        [Display(Name = "Premium")]
        public bool IsPremium { get; set; }
        // END OF TO BE DEPLOYED
    }
}