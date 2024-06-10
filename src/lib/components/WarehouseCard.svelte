<script>
	import deleteIcon from '$assets/deleteIcon.svg';
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import editIcon from '$assets/editIcon.svg';

	export let warehouse;
</script>

<div class="warehouse-card">
	<div class="warehouse-card--left">
		<div class="warehouse-card--warehouse-name">
			<h4 class="warehouse-card--heading">WAREHOUSE</h4>
			<a href="/details/warehouse/{warehouse?.$id}" class="warehouse-card--warehouse-link">
				{warehouse?.warehouse_name}
				<img src={rightArrowIcon} alt="go to {warehouse?.warehouse_name} details" />
			</a>
		</div>
		<div class="warehouse-card--warehouse-address">
			<h4 class="warehouse-card--heading">ADDRESS</h4>
			<p class="warehouse-card--text">
				{warehouse?.address},
			</p>
			<p class="warehouse-card--text">
				{warehouse?.city}, {warehouse?.country}
			</p>
		</div>
		<form class="warehouse-card--form">
			<button class="warehouse-card--delete">
				<img src={deleteIcon} alt="delete button" />
			</button>
		</form>
	</div>
	<div class="warehouse-card--right">
		<div class="warehouse-card--warehouse-contact-name">
			<h4 class="warehouse-card--heading">CONTACT NAME</h4>
			<p class="warehouse-card--text">{warehouse?.contact_name}</p>
		</div>
		<div class="warehouse-card--warehouse-contact-information">
			<h4 class="warehouse-card--heading">CONTACT INFORMATION</h4>
			<p class="warehouse-card--text">{warehouse?.contact_phone}</p>
			<p class="warehouse-card--text">{warehouse?.contact_email}</p>
		</div>
		<form class="warehouse-card--form">
			<a href="/edit/warehouse/{warehouse?.$id}" class="warehouse-card--edit">
				<img src={editIcon} alt="edit button" />
			</a>
			<button class="warehouse-card--delete delete-tablet">
				<img src={deleteIcon} alt="delete button" />
			</button>
		</form>
	</div>
</div>

<style lang="scss">
	.warehouse-card {
		display: flex;
		border-top: 1px solid $in-stock-cloud;
		padding: 1rem;
		&--form {
			display: flex;
			align-items: center;
		}
		&--warehouse {
			&-name,
			&-address,
			&-contact-name,
			&-contact-information {
				@include tablet {
					flex: 1;
				}
			}
			&-link {
				display: flex;
				align-items: center;
				color: $in-stock-indigo;
				text-decoration: none;
				font-weight: 600;
				font-size: $h3M;
				line-height: 20px;
				img {
					width: 20px;
					height: 20px;
				}
			}
		}
		&--left,
		&--right {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			@include tablet {
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		}
		&--heading {
			@include tablet {
				display: none;
			}
		}
		&--heading {
			font-size: $h4M;
			font-weight: 600;
			color: $in-stock-slate;
			line-height: 1rem;
		}
		&--text {
			font-size: $p2M;
			line-height: 20px;
			font-weight: 400;
		}
		&--delete,
		&--edit {
			background: none;
			border: none;
		}
		&--edit {
			display: flex;
			justify-content: flex-end;
			width: 100%;
			@include tablet {
				display: block;
			}
		}
		&--delete {
			@include tablet {
				display: none;
			}
		}

		.delete-tablet {
			display: none;
			@include tablet {
				display: block;
			}
		}
	}
</style>
