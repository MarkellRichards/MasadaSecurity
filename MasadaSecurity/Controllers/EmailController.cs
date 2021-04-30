using MasadaSecurity.DTOs;
using MasadaSecurity.Email;
using MasadaSecurity.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasadaSecurity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        private readonly IEmailSender _emailSender;

        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpPost]
        public async Task<ActionResult> SendEmail([FromBody] object content )
        {
            var message = new Message(new string[] { "markell.b.richards@gmail.com" }, "Test email", content.ToString());
            await _emailSender.SendEmailAsync(message);
            return Ok();
        }
    }
}
