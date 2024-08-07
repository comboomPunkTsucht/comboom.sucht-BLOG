import { FlagOverridesType, decrypt } from '@vercel/flags';
import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

async function getFlags(request: NextRequest) {
  const overrideCookie = cookies().get('vercel-flag-overrides')?.value;
  const overrides = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {};

  const flags = {
    exampleFlag: overrides?.exampleFlag ?? false,
    log_metadata: overrides?.log_metadata ?? false,
  };

  return flags;
}