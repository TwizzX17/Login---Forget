using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SecureMeShared.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "User",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    MasterPass = table.Column<string>(maxLength: 32, nullable: false),
                    FirstName = table.Column<string>(maxLength: 30, nullable: true),
                    LastName = table.Column<string>(maxLength: 40, nullable: true),
                    Country = table.Column<string>(maxLength: 50, nullable: true),
                    City = table.Column<string>(maxLength: 80, nullable: true),
                    Street = table.Column<string>(maxLength: 80, nullable: true),
                    Zip = table.Column<string>(maxLength: 10, nullable: true),
                    IsAuthenticated = table.Column<bool>(nullable: false),
                    Phone = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Password",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PasswordHash = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    SiteDescription = table.Column<string>(maxLength: 50, nullable: false),
                    SiteLocation = table.Column<string>(maxLength: 100, nullable: false),
                    GeneratedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Password", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Password_User_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "User",
                columns: new[] { "Id", "City", "Country", "Email", "FirstName", "IsAuthenticated", "LastName", "MasterPass", "Phone", "Street", "Zip" },
                values: new object[] { 1, null, null, "Email@Example.com", null, false, null, "VerySafe123", 0, null, null });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "User",
                columns: new[] { "Id", "City", "Country", "Email", "FirstName", "IsAuthenticated", "LastName", "MasterPass", "Phone", "Street", "Zip" },
                values: new object[] { 2, null, null, "Email2@Example.com", null, false, null, "Unsafe", 0, null, null });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Password",
                columns: new[] { "Id", "GeneratedOn", "PasswordHash", "SiteDescription", "SiteLocation", "UserId" },
                values: new object[,]
                {
                    { 1, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "SafePasswordForFacebook", "Facebook", "https://www.facebook.com/", 1 },
                    { 2, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "SafePassForGmail", "gmail", "https://www.gmail.com/", 1 },
                    { 3, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "SafePassForBattleOn", "AdventureQuest", "https://www.battleon.com/", 1 },
                    { 4, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "insecurepass", "Facebook", "https://www.facebook.com/", 2 },
                    { 5, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "123456", "Facebook", "https://www.facebook.com/", 2 },
                    { 6, new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local), "mydogsname", "Facebook", "https://www.facebook.com/", 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Password_UserId",
                schema: "dbo",
                table: "Password",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Password",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "User",
                schema: "dbo");
        }
    }
}
