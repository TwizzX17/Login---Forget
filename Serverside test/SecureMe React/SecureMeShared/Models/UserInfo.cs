using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SecureMeShared.Models
{
    [Table("UserInfo", Schema = "dbo")]
    public class UserInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // USER INFO
        [StringLength(30)]
        //[Display(Name = "First Name")]
        public string FirstName { get; set; }

        [StringLength(40)]
        //[Display(Name = "Last Name")]
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

        //[Display(Name = "Phone number")]
        public int? Phone { get; set; }
        // USER INFO END

        [ForeignKey("User")]
        public int UserId { get; set; }

        public User User { get; set; }
    }
}
