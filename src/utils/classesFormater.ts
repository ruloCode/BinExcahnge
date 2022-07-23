// OBJECT = scss module import variable, classes = String with scss module classes names,
// staticClasses = String with static classes added to the end
interface IParams {
  classes?: string;
  styles?: any;
  styleClasses?: string;
}

export const getClasses = (params: IParams) => {
  const { classes = '', styles = {}, styleClasses = '' }: IParams = params;
  const joinedClasses: any = [];

  styleClasses.split(' ').forEach((className) => joinedClasses.push(styles[className]));

  return `${joinedClasses.join(' ')} ${classes}`;
};

export default getClasses;
