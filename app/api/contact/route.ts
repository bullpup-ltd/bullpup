import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const {
            name,
            email,
            service_type,
            message,
        } = body

        if (!name || !email || !service_type || !message) {
            return Response.json(
                {
                    success: false,
                    message: 'Please complete all required fields.',
                },
                { status: 400 }
            )
        }

        const { data, error } = await resend.emails.send({
            from: 'Bullpup PTY LTD <onboarding@resend.dev>',
            to: ['jesseemmanuel@gmail.com'],
            replyTo: email,
            subject: `New Quote Request - ${service_type}`,

            html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
            <div style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

              <!-- Header -->
              <div style="background:#00236f;padding:32px;">
                <h1 style="margin:0;color:#ffffff;font-size:24px;">
                  New Quote Request
                </h1>

                <p style="margin:8px 0 0;color:#dca75a;font-size:14px;font-weight:bold;">
                  ${service_type}
                </p>
              </div>

              <!-- Content -->
              <div style="padding:32px;">

                <h2 style="margin:0 0 20px;color:#222;font-size:18px;">
                  Customer Details
                </h2>

                <div style="margin-bottom:16px;">
                  <p style="margin:0 0 4px;color:#777;font-size:12px;font-weight:bold;text-transform:uppercase;">
                    Name
                  </p>

                  <p style="margin:0;color:#222;font-size:15px;">
                    ${name}
                  </p>
                </div>

                <div style="margin-bottom:16px;">
                  <p style="margin:0 0 4px;color:#777;font-size:12px;font-weight:bold;text-transform:uppercase;">
                    Email
                  </p>

                  <p style="margin:0;color:#222;font-size:15px;">
                    ${email}
                  </p>
                </div>

                <div style="margin-bottom:24px;">
                  <p style="margin:0 0 4px;color:#777;font-size:12px;font-weight:bold;text-transform:uppercase;">
                    Service
                  </p>

                  <p style="margin:0;color:#222;font-size:15px;">
                    ${service_type}
                  </p>
                </div>

                <div style="border-top:1px solid #eeeeee;padding-top:24px;">
                  <p style="margin:0 0 10px;color:#777;font-size:12px;font-weight:bold;text-transform:uppercase;">
                    Project Details
                  </p>

                  <p style="margin:0;color:#333;font-size:15px;line-height:1.7;white-space:pre-line;">
                    ${message}
                  </p>
                </div>

              </div>

              <!-- Footer -->
              <div style="background:#fafafa;border-top:1px solid #eeeeee;padding:20px 32px;">
                <p style="margin:0;color:#999;font-size:12px;text-align:center;">
                  Submitted through the Bullpup website contact form.
                </p>
              </div>

            </div>
          </body>
        </html>
      `,
        })

        if (error) {
            console.error('Resend error:', error)

            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: 500 }
            )
        }

        return Response.json({
            success: true,
            data,
        })
    } catch (error) {
        console.error('Contact form error:', error)

        return Response.json(
            {
                success: false,
                message: 'Something went wrong while sending your request.',
            },
            { status: 500 }
        )
    }
}