import { Paper, Typography } from '@mui/material';
import { memo } from 'react';

function Widget(props) {
  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between">
      <div className="flex items-center justify-between px-4 pt-8">
        <Typography className="text-16 px-16 font-medium" color="textSecondary">
          {props.widget.title}
        </Typography>
      </div>
      <div className="text-center py-12">
        <Typography className="text-48 xl:text-64 font-semibold leading-none tracking-tighter">
          {props.widget.data.count}
        </Typography>
        <Typography className="text-18 font-normal">
          {props.widget.data.name}
        </Typography>
      </div>
      <Typography
        className="p-20 pt-0 h-56 flex justify-center items-end text-13 font-medium"
        color="textSecondary"
      >
        <span className="truncate">{props.widget.data.extra.name}</span>:
        <b className="px-8">{props.widget.data.extra.count}</b>
      </Typography>
    </Paper>
  );
}

export default memo(Widget);
