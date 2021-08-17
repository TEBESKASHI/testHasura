import geoip from 'geoip-country';

export const getCountryFromIp = (res) => {
    const ip = res.locals.ip;
    return geoip.lookup(ip) !== null ? geoip.lookup(ip).country : 'RU';
};
