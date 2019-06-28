import Navigator from '../constants/navigator';
export const getNavByTab = tab => {
  const navInfo = Navigator.filter(nav => nav.tab === tab);
  // default to home
  return navInfo[0] || Navigator[0];
}