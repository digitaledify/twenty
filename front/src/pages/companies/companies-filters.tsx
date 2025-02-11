import { FilterDefinitionByEntity } from '@/ui/filter-n-sort/types/FilterDefinitionByEntity';
import {
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconLink,
  IconMap,
  IconUser,
  IconUsers,
} from '@/ui/icon/index';
import { TableContext } from '@/ui/table/states/TableContext';
import { icon } from '@/ui/theme/constants/icon';
import { FilterDropdownUserSearchSelect } from '@/users/components/FilterDropdownUserSearchSelect';
import { Company } from '~/generated/graphql';

export const companiesFilters: FilterDefinitionByEntity<Company>[] = [
  {
    field: 'name',
    label: 'Name',
    icon: (
      <IconBuildingSkyscraper size={icon.size.md} stroke={icon.stroke.sm} />
    ),
    type: 'text',
  },
  {
    field: 'employees',
    label: 'Employees',
    icon: <IconUsers size={icon.size.md} stroke={icon.stroke.sm} />,
    type: 'number',
  },
  {
    field: 'domainName',
    label: 'URL',
    icon: <IconLink size={icon.size.md} stroke={icon.stroke.sm} />,
    type: 'text',
  },
  {
    field: 'address',
    label: 'Address',
    icon: <IconMap size={icon.size.md} stroke={icon.stroke.sm} />,
    type: 'text',
  },
  {
    field: 'createdAt',
    label: 'Created at',
    icon: <IconCalendarEvent size={icon.size.md} stroke={icon.stroke.sm} />,
    type: 'date',
  },
  {
    field: 'accountOwnerId',
    label: 'Account owner',
    icon: <IconUser size={icon.size.md} stroke={icon.stroke.sm} />,
    type: 'entity',
    entitySelectComponent: (
      <FilterDropdownUserSearchSelect context={TableContext} />
    ),
  },
];
