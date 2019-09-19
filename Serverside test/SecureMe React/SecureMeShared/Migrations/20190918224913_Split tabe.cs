using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SecureMeShared.Migrations
{
    public partial class Splittabe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Country",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "FirstName",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "IsAuthenticated",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LastName",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Phone",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Street",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Zip",
                schema: "dbo",
                table: "User");

            migrationBuilder.CreateTable(
                name: "UserInfo",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(maxLength: 30, nullable: true),
                    LastName = table.Column<string>(maxLength: 40, nullable: true),
                    Country = table.Column<string>(maxLength: 50, nullable: true),
                    City = table.Column<string>(maxLength: 80, nullable: true),
                    Street = table.Column<string>(maxLength: 80, nullable: true),
                    Zip = table.Column<string>(maxLength: 10, nullable: true),
                    IsAuthenticated = table.Column<bool>(nullable: false),
                    Phone = table.Column<int>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserInfo_User_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "UserInfo",
                columns: new[] { "Id", "City", "Country", "FirstName", "IsAuthenticated", "LastName", "Phone", "Street", "UserId", "Zip" },
                values: new object[] { 1, "LallaLand", "Dennemarken", "Jacopy", false, "Wick", 88888888, "Lollypoppy 123", 1, "" });

            migrationBuilder.CreateIndex(
                name: "IX_UserInfo_UserId",
                schema: "dbo",
                table: "UserInfo",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserInfo",
                schema: "dbo");

            migrationBuilder.AddColumn<string>(
                name: "City",
                schema: "dbo",
                table: "User",
                maxLength: 80,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                schema: "dbo",
                table: "User",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                schema: "dbo",
                table: "User",
                maxLength: 30,
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsAuthenticated",
                schema: "dbo",
                table: "User",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                schema: "dbo",
                table: "User",
                maxLength: 40,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Phone",
                schema: "dbo",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                schema: "dbo",
                table: "User",
                maxLength: 80,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Zip",
                schema: "dbo",
                table: "User",
                maxLength: 10,
                nullable: true);
        }
    }
}
