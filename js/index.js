const donationTab = document.getElementById('show-donation-1')
const historyTab = document.getElementById('show-history-1')
historyTab.addEventListener('click',function(){
    historyTab.classList.add(
        "bg-green-500",
        "text-white",
    );
    historyTab.classList.remove(
        "bg-white",
        "text-gray-700",
    ); 
    donationTab.classList.remove(
        "bg-green-500",
        "text-white",
    );
    donationTab.classList.add(
    "bg-white",
        "text-gray-700",
    );
});
donationTab.addEventListener('click',function(){

    donationTab.classList.add(
        "bg-green-500",
        "text-white",);
    donationTab.classList.remove(
        "bg-white",
        "text-gray-700",);
    historyTab.classList.remove(
        "bg-green-500",
        "text-white",);
    historyTab.classList.add(
        "bg-white",
        "text-gray-700",);
});