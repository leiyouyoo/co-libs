import { CoAuthConfig, CoConfigService } from '@co/core';

export const AUTH_DEFAULT_CONFIG: CoAuthConfig = {
  store_key: `_token`,
  token_invalid_redirect: true,
  token_exp_offset: 10,
  token_send_key: `token`,
  // tslint:disable-next-line: no-invalid-template-strings
  token_send_template: '${token}',
  token_send_place: 'header',
  login_url: '/login',
  ignores: [/sso\/connect\/token/, /sso\/account/i, /assets\//, /passport\//, /login\//],
  allow_anonymous_key: `_allow_anonymous`,
  executeOtherInterceptors: true,
};

export function mergeConfig(srv: CoConfigService): CoAuthConfig {
  return srv.merge('auth', AUTH_DEFAULT_CONFIG);
}
