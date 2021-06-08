window.BENCHMARK_DATA = {
  "lastUpdate": 1623174905726,
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
          "id": "dee082f3ded7b874117c64974ce107ff6bb50517",
          "message": ":memo: Add `cruft` & `cookiecutter` install steps",
          "timestamp": "2021-06-08T17:50:35Z",
          "tree_id": "a89b87b1026d6449d2ec12a94b2fdcc908449141"
        },
        "date": 1623174904691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15957.33770617018,
            "unit": "iter/sec",
            "range": "stddev: 0.000011170974958723846",
            "extra": "mean: 62.66709512660955 usec\nrounds: 5971"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5325385.642234423,
            "unit": "iter/sec",
            "range": "stddev: 5.956509436592714e-9",
            "extra": "mean: 187.77982801266205 nsec\nrounds: 52911"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13126.160336232744,
            "unit": "iter/sec",
            "range": "stddev: 0.000015053076808562348",
            "extra": "mean: 76.18374104723175 usec\nrounds: 9662"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148982.08230311092,
            "unit": "iter/sec",
            "range": "stddev: 4.452055148006612e-7",
            "extra": "mean: 6.712216560146165 usec\nrounds: 42016"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16638.569030549992,
            "unit": "iter/sec",
            "range": "stddev: 0.000002270172999561075",
            "extra": "mean: 60.10132230505551 usec\nrounds: 10428"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5031502.284082285,
            "unit": "iter/sec",
            "range": "stddev: 1.265284083022752e-8",
            "extra": "mean: 198.74779808079626 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}