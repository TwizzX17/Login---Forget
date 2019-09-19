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
            UserInfos = new List<UserInfo>();
        }


        // NECESSARY CODE
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Display(Name = "")]
        public int Id { get; set; }
        [Required, StringLength(50), EmailAddress]
        public string Email { get; set; }

        [Required, StringLength(32)]
        //[Display(Name = "Password")]
        public string MasterPass { get; set; }
        // NECESSARY CODE END

        //NAVIGATION
        public virtual ICollection<Password> Passwords { get; set; }
        public virtual ICollection<UserInfo> UserInfos { get; set; }
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