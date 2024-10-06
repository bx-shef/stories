import pkg from "../../../package.json";

let [domain, folder] = pkg.homepage.replace('https://', '').split('/')

export const configParams = Object.freeze({
	version: pkg.version,
	domain: `https://${domain}`,
	baseFolder: `/${folder}/`,
	github: pkg.repository.url.replace('git+', '').replace('.git', ''),
	relative: []
})