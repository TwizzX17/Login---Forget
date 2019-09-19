using Microsoft.EntityFrameworkCore.Migrations;

namespace SecureMeShared.Migrations
{
    public partial class Uniqueemail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_User_Email",
                schema: "dbo",
                table: "User",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_User_Email",
                schema: "dbo",
                table: "User");
        }
    }
}
