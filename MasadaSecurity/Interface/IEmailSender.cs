using MasadaSecurity.Email;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasadaSecurity.Interface
{
    public interface IEmailSender
    {
        Task SendEmailAsync(Message message);
    }
}
