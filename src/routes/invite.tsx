
export default function Invite() {
    if (typeof window === "undefined") return null;
    return window.location.href = `https://boostinsurance-sandbox.us.auth0.com/authorize${window.location.search}`
}
