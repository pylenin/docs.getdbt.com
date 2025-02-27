/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';

export default function BlogSidebar({sidebar, tagData}) {
  if (sidebar.items.length === 0) {
    return null;
  }

  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar',
      })}>
      {tagData && (
        <>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          Categories
        </div>
        <ul className={styles.sidebarItemList}>
          {tagData && tagData.filter(tag => tag.is_featured)?.map((tag, i) => {
            if(!tag)
              return null
            return (
              <li className={styles.sidebarItem} key={i}>
                <Link
                  isNavLink
                  to={`/blog/tags/${tag.slug}`}
                  className={styles.sidebarItemLink}
                  activeClassName={styles.sidebarItemLinkActive}>
                  {tag.display_title ? tag.display_title : tag.name}
                </Link>
              </li>
            )
          }
          )}
        </ul>
        </>
      )}
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        {sidebar.title}
      </div>
      <ul className={styles.sidebarItemList}>
        {sidebar.items.map((item) => {
          return (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
