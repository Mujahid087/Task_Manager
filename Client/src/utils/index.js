// export function getInitials(fullName){
//     const names=fullName.split(" ")
//     const initials=names.slice(0,2).map((name)=>name[0].toUpperCase());
//     const initialsStr=initials.join("");
//     return initialsStr;
// }

export default function getInitials(fullName = "") {
    if (!fullName) return ""; // Return an empty string if no valid name is provided
    const names = fullName.split(" ");
    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
    return initials.join("");
}
