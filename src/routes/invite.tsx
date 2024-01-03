
export default function Invite() {
    if (typeof window === "undefined") return null;
    return window.location.href = "https://dev-oew1sl2vc4usydp8.us.auth0.com/authorize${location.search};"
}
