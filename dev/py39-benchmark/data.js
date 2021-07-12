window.BENCHMARK_DATA = {
  "lastUpdate": 1626111185043,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "4c6ed9fa844f51d6a6926b6180807723afeac4ec",
          "message": ":rotating_light: Read `rst_prolog` in via `pathlib.Path`\n\nAutomate file opening/closing; fixes:\n```\n  pylint...............................................................................Failed\n  - hook id: pylint\n  - duration: 8.29s\n  - exit code: 8\n\n  ************* Module conf\n  docs/source/conf.py:60:13: R1732: Consider using 'with' for resource-allocating operations (consider-using-with)\n```",
          "timestamp": "2021-07-12T17:28:08Z",
          "tree_id": "9cfdafc338416ce8f52175a47ea5b5b84c8eb65e"
        },
        "date": 1626111182384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14518.898548899904,
            "unit": "iter/sec",
            "range": "stddev: 0.000027522439680641716",
            "extra": "mean: 68.87574815899309 usec\nrounds: 11948"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3948053.222140325,
            "unit": "iter/sec",
            "range": "stddev: 8.779199955400786e-7",
            "extra": "mean: 253.28939194437754 nsec\nrounds: 9785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12163.367703258022,
            "unit": "iter/sec",
            "range": "stddev: 0.000021812416827231213",
            "extra": "mean: 82.21407297685697 usec\nrounds: 8811"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128667.02016464995,
            "unit": "iter/sec",
            "range": "stddev: 0.000006562945310897654",
            "extra": "mean: 7.771999372646858 usec\nrounds: 51021"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14054.430308389934,
            "unit": "iter/sec",
            "range": "stddev: 0.00009967999577419031",
            "extra": "mean: 71.15194127812067 usec\nrounds: 9843"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4070500.1757896044,
            "unit": "iter/sec",
            "range": "stddev: 6.350014267780272e-7",
            "extra": "mean: 245.67005449344947 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}