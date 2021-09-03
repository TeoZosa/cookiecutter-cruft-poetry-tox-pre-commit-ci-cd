window.BENCHMARK_DATA = {
  "lastUpdate": 1630682411754,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "19253d6710e297b04c9bc97e9f07e041c18ec17d",
          "message": ":bug: Fix incomplete `jupyter_notebook_support` refactoring",
          "timestamp": "2021-09-03T15:14:33Z",
          "tree_id": "281f5c11ba544f648d21043a3131016405b0e539"
        },
        "date": 1630682408874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16515.441699967676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040100784192233055",
            "extra": "mean: 60.549394812853066 usec\nrounds: 7981"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5237591.39734862,
            "unit": "iter/sec",
            "range": "stddev: 6.64434379629397e-9",
            "extra": "mean: 190.92745579703515 nsec\nrounds: 47170"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14064.05553915066,
            "unit": "iter/sec",
            "range": "stddev: 0.00000959290541017582",
            "extra": "mean: 71.10324594611141 usec\nrounds: 9311"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150116.47216132996,
            "unit": "iter/sec",
            "range": "stddev: 6.40986621281419e-7",
            "extra": "mean: 6.661494142530217 usec\nrounds: 42510"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16326.412292718927,
            "unit": "iter/sec",
            "range": "stddev: 0.000006485674951524897",
            "extra": "mean: 61.250443886313526 usec\nrounds: 10550"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5020807.762550414,
            "unit": "iter/sec",
            "range": "stddev: 1.3582134278123758e-8",
            "extra": "mean: 199.17113884714402 nsec\nrounds: 195887"
          }
        ]
      }
    ]
  }
}