import { FAILURE, FETCH, SUCCESS } from './constants';

export function createType(base) {
  let _base = base;
  if (Array.isArray(_base)) {
    _base = _base.join('/');
  }
  return _base;
}

export function action(type, payload) {
  return { type, ...payload };
}

export function createMetaOffline({ effect, commit, rollback }) {
  return {
    meta: {
      offline: {
        effect,
        commit,
        rollback
      }
    }
  };
}

/**
 * 비동기 액션 요청 타입 생성
 * @param base
 * @returns {{ FETCH: FETCH_${_base}, SUCCESS: SUCCESS_${_base}, FAILURE: FAILURE_${_base} }}
 */
export function createFetchTypes(base) {
  let _base = base;
  if (Array.isArray(_base)) {
    _base = _base.join('/');
  }
  const res = {};
  [FETCH, SUCCESS, FAILURE].forEach(type => (res[type] = `${type}_${_base}`));
  return res;
}

export function patch(type, patch = {}, mergeKeys) {
  const rt = { type, patch };
  if (mergeKeys) {
    rt.mergeKeys = Array.isArray(mergeKeys) ? mergeKeys : [mergeKeys];
  }
  return rt;
}
