export const store = {
  name: "Maximum Outfits",
  address: "K-50, Block K, Lajpat Nagar II, New Delhi, Delhi 110024",
  phoneDisplay: "098992 95657",
  // TO BE CONFIRMED with owner
  whatsappNumber: "919899295657",
  whatsappLink(message) {
    return whatsappLink(message);
  },
};

export function whatsappLink(message) {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message || "")}`;
}
