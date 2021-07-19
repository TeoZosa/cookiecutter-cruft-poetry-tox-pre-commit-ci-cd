window.BENCHMARK_DATA = {
  "lastUpdate": 1626701455722,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "70ccb9bf10e83c1abb0949c36e267ac2b14da8b2",
          "message": "Merge pull request #248 from TeoZosa/dependabot/pip/hypothesis-6.14.3",
          "timestamp": "2021-07-19T13:21:10Z",
          "tree_id": "e330d84ec394d2045d9e96be41cc7b8ecb8ad336"
        },
        "date": 1626701454518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13811.04284326492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005147010907554252",
            "extra": "mean: 72.40582853507395 usec\nrounds: 12300"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5007787.215387926,
            "unit": "iter/sec",
            "range": "stddev: 9.328404883891013e-9",
            "extra": "mean: 199.68899575595194 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12355.524590942998,
            "unit": "iter/sec",
            "range": "stddev: 0.000018171816090537795",
            "extra": "mean: 80.935454633228 usec\nrounds: 9434"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151101.05965328668,
            "unit": "iter/sec",
            "range": "stddev: 3.247628502754877e-7",
            "extra": "mean: 6.618087274136787 usec\nrounds: 35715"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13621.215246702033,
            "unit": "iter/sec",
            "range": "stddev: 0.00000848371969754581",
            "extra": "mean: 73.41488860490036 usec\nrounds: 14085"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5030160.791330992,
            "unit": "iter/sec",
            "range": "stddev: 1.1171209397838807e-7",
            "extra": "mean: 198.80080209800514 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}