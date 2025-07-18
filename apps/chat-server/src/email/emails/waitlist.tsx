import { Body, Container, Head, Html, Img, Link, Preview, Text } from '@react-email/components'
import { container, logo, main, paragraph } from './css'

export function WaitlistEmail() {
  return (
    <Html>
      <Head />
      <Preview>The AI platform that helps you uncover qualified leads.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={'https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs//emailLodgo.png'}
            width="140"
            height="70"
            alt="acme"
            style={{ objectFit: 'cover', ...logo }}
          />

          <Text style={paragraph}>Hi Friend,</Text>
          <Text style={paragraph}>
            Thanks for Your interest in ACME! We received your information and we will be in touch soon
          </Text>
          <Text style={paragraph}>
            We are excited about what we are building and can't wait to share more with you. In the meantime, stay up to
            date on product updates and more on our X account <Link href="https://x.com/acme">@acme</Link>
          </Text>

          <Text style={paragraph}>
            Best,
            <br />
            The ACME team
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default WaitlistEmail
