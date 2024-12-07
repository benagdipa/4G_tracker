<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
         if (!Schema::hasTable('column_options')) {
			Schema::create('column_options', function (Blueprint $table) {
				$table->id();
				$table->string('type');
				$table->string('key');
				$table->string('value')->nullable();
				$table->string('names')->nullable();
				$table->timestamps();
			});
		}
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('column_options');
    }
};
