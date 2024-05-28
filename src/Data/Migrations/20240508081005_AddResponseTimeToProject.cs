﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OeuilDeSauron.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddResponseTimeToProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MaxResponseTimeInSecond",
                table: "Projects",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaxResponseTimeInSecond",
                table: "Projects");
        }
    }
}
