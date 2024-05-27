export function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
      } else if (num >= 1) {
        return num.toFixed(2);
      } else {
        return num.toFixed(5).replace(/\.?0+$/, '');
      }
    }
  
 
  
  