
export default function Invite() {
    if (typeof window === "undefined") return null;
    return window.location.href = `https://boostinsurance-sandbox.us.auth0.com/authorize${window.location.search}&response_type=code&client_id=1o3eDD7TWYrWDlxdNKCfEmmj7cZtSWAC&screen_hint=signup`
}
