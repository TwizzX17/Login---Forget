using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SecureMeShared.Migrations
{
    public partial class nullablephone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Phone",
                schema: "dbo",
                table: "User",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 1,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 2,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 3,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 4,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 5,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 6,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                column: "Phone",
                value: null);

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "User",
                keyColumn: "Id",
                keyValue: 2,
                column: "Phone",
                value: null);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Phone",
                schema: "dbo",
                table: "User",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 1,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 2,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 3,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 4,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 5,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "Password",
                keyColumn: "Id",
                keyValue: 6,
                column: "GeneratedOn",
                value: new DateTime(2019, 9, 17, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                column: "Phone",
                value: 0);

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "User",
                keyColumn: "Id",
                keyValue: 2,
                column: "Phone",
                value: 0);
        }
    }
}
