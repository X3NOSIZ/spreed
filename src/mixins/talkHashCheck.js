/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { showError } from '@nextcloud/dialogs'

const talkHashCheck = {
	data() {
		return {
			reloadWarningShown: false,
		}
	},

	computed: {
		isNextcloudTalkHashDirty() {
			return this.$store.getters.isNextcloudTalkHashDirty
		},
	},

	watch: {
		isNextcloudTalkHashDirty(isDirty) {
			if (isDirty) {
				this.showReloadWarning()
			}
		},
	},

	methods: {
		showReloadWarning() {
			if (this.reloadWarningShown) {
				return
			}

			this.reloadWarningShown = true
			showError(t('spreed', 'Nextcloud Talk was updated, please reload the page'), {
				timeout: -1,
			})
		},
	},
}

export default talkHashCheck
