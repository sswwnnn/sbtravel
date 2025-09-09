using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class Initial_Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$.rS2bIU5YPgXzEaOQl.EGO7sdt31VseQMctzHF6tn8RZ45Byex/9S", true });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$ZF5Z/6QkQLoCW9zwez6.q.bFtMWLB4YkSPH3Oy0XZtFWJDM1JxiUC", true });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$DVqTZRPQyz2n9CgdXLzF2OQQe4u5bBk3l4y8Yz7ngomLRA4fJMFgu", true });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$MDsWg7qtbZH41Ez7fMtKFe2Zfcmgslv4iuByJiuZ5kv/sTbQYvM2e", true });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$/9MVJJloiAkXArh.2xvjzeyXJYTZZGZsTZAEJaGcZX2fi1e8SHkvq", true });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 6,
                column: "Password",
                value: "$2a$11$Me3bb2bjiGMCzpvCFXBC2.xEi2vCDRbdxkpVlRQl4hzExLCgTmrsq");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 7,
                column: "Password",
                value: "$2a$11$K.d0MaGquDdYGCPATi8ciuEkbqk6LIsIu4tHBpibpBqi2maI64RC.");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 8,
                column: "Password",
                value: "$2a$11$PjTAb6OI2LK9w0OlChaq2e9ZKrmMh3oXW5TAwZSwzJxdNcYKEi1Ue");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 9,
                column: "Password",
                value: "$2a$11$Pojfd6J.CQngE.28FNG0guZMZV39ClNoWIeuB6Q63hrrO7Klwl4iu");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 10,
                column: "Password",
                value: "$2a$11$ajkVyT.WDJy0qEza1RJ6fOtRNJLzJL/l1MwuUBVA3TUsOvRMc/Bwm");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$4N4rFaaG66waKbJ2Ta8ux.XZ8dM.Ap95TkP7g3WOrN9yOrJYrScqC");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$5/jjpmxe7fiWQ/8HccBNJu73WTuH3HtPXcu/rP6vrifH5wXxqJhY.");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$ZS2RtN9tA9VU3tJB1ZdmCu9lQYkAbsVVlA6FHxj/RerEv.3XrwIU.");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$AbC4cIV4gxpBBat5tctuYuzLQcrlU4v9E5jfJEyoUNagBybecqJ4O", false });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$lh7HRLWVBmnyPJrTI2ElGeJtaMi0hgDThURUTnT3RdLxxZHd0HLbm", false });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$UMf7iETfAk.Mod5.mwsTIeK4paS9DztweZ4b2vX8IVxB7IBv4EbBK", false });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$hmNU9j5szrPtbUF5Ykazcud0taXJz6A7ZSIHoz.q3JdE0LVYVPJiK", false });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Password", "isApprove" },
                values: new object[] { "$2a$11$8zhT87TsuOMZDb73WrmOqeKhNJf7iAIfBbwpfCcIHyaoQtX4YqRoC", false });

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 6,
                column: "Password",
                value: "$2a$11$m35JTD2NxC3.MBB2XHhZAe0x4j6JHMVyxshXQMKamXVijOdoMNebi");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 7,
                column: "Password",
                value: "$2a$11$vhgJCRAu00oPQx.p6KYbQ..O0w3XxlfzlmVvVeX3tEuQylTWcGdo2");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 8,
                column: "Password",
                value: "$2a$11$VP2BP4Sij/5N4EdIuBVR9uRCCGpOuNJzbq1cvZvDSjiFp/FvsexEm");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 9,
                column: "Password",
                value: "$2a$11$c3CNPgXIhjIytns5LTewVO.nQYps.mMaQX2ynTXhU7cvYCq3n.2ee");

            migrationBuilder.UpdateData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: 10,
                column: "Password",
                value: "$2a$11$pKr3YhaeKzrTuF/1eZRRPeiXNWg24V.nfHkhBsn5r0maBuX2Vuo2.");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$05Ra0nLyV28Qm83w8AXnzeYhU/XvENlFpPIkIIyLAdEKiAlrvc3XC");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$lO.DhNPYdJ1mO14u3vLaPuQ8QAq1GhtW1RgV7H4z5nx72vHC8pDFe");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$3q/k8Zxj8MTzy.pkweUbSu/kS8c7UW1zzvwPL7V7JDd2IL87BslFm");
        }
    }
}
