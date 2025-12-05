export const useInputFormatters = () => {
  const formatCardNumber = (value) => {
    if (!value) return '';
    let v = value.replace(/\D/g, '').substring(0, 16);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    return v;
  };

  const formatExpiryDate = (value) => {
    if (!value) return '';
    let v = value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) {
      v = v.substring(0, 2) + ' / ' + v.substring(2);
    }
    return v;
  };

  const formatCvv = (value) => {
    if (!value) return '';
    return value.replace(/\D/g, '').substring(0, 4);
  };

  const formatCardHolder = (value) => {
    if (!value) return '';
    return value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '').substring(0, 50);
  };

  const formatPhone = (value) => {
    if (!value) return '';
    return value.replace(/\D/g, '');
  };

  const preventNumbers = (event) => {
    const key = event.key;
    if (/[0-9]/.test(key) && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
    }
  };

  const preventLetters = (event) => {
    const key = event.key;
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (allowedKeys.includes(key) || event.ctrlKey || event.metaKey) {
      return;
    }
    if (!/[0-9]/.test(key)) {
      event.preventDefault();
    }
  };

  return {
    formatCardNumber,
    formatExpiryDate,
    formatCvv,
    formatCardHolder,
    formatPhone,
    preventNumbers,
    preventLetters
  };
};

