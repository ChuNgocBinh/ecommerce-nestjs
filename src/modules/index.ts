import { AuthModule } from './auth/auth.module';
import { TwilioModuleSms } from './twilio/twilio.module';
import { UserModule } from './user/user.module';

export const module = [AuthModule, TwilioModuleSms, UserModule];
