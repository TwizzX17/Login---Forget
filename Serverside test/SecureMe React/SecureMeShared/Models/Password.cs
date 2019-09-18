using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SecureMeShared.Models
{
    [Table("Password", Schema = "dbo")]
    public class Password
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "")]
        public int Id { get; set; }

        public string PasswordHash { get; set; }

        //[Display(Name = "Customer Id")]
        [ForeignKey("User")]
        public int UserId { get; set; }

        //[Display(Name = "")]
        [Required, StringLength(50)]
        public string SiteDescription { get; set; }

        //[Display(Name = "")]
        [Required, StringLength(100), Url]
        public string SiteLocation { get; set; }

        //[Display(Name = "")]
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